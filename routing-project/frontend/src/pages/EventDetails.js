import { Suspense } from "react";
import {
    json,
    redirect,
    useRouteLoaderData,
    defer,
    Await,
} from "react-router-dom";

import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

const EventDetailsPage = () => {
    const { event, events } = useRouteLoaderData("event-detail");

    return (
        <>
            <Suspense fallback={<p>Loading Event...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => {
                        return <EventItem event={loadedEvent} />;
                    }}
                </Await>
            </Suspense>

            <Suspense fallback={<p>Loading Events...</p>}>
                <Await resolve={events}>
                    {(loadedEvents) => {
                        return <EventsList events={loadedEvents} />;
                    }}
                </Await>
            </Suspense>
        </>
    );
};

export default EventDetailsPage;

async function loadEvent(id) {
    const response = await fetch(`http://localhost:8080/events/${id}`);

    if (!response.ok) {
        throw json({ message: "Failed to load event data" }, { status: 500 });
    }

    const resData = await response.json();
    return resData.event;
}

async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        throw json({ message: "Could not fetch events." }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({ request, params }) {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents(),
    });
}

export async function action({ request, params }) {
    const response = await fetch(
        `http://localhost:8080/events/${params.eventId}`,
        {
            method: request.method,
        }
    );

    if (!response.ok) {
        throw json({ message: "Failed deleting event" }, { status: 500 });
    }

    return redirect("/events");
}
