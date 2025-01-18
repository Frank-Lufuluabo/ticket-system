"use client";

import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import Spinner from "./Spinner";

function EventList() {
  const events = useQuery(api.events.get);
  
  if (!events) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <Spinner />
      </div>
    );
  }

  const upcomingEvents = events
  .filter((event) => event.eventDate > Date.now())
  .sort((a, b) => a.eventDate - b.eventDate);

const pastEvents = events
  .filter((event) => event.eventDate <= Date.now())
  .sort((a, b) => b.eventDate - a.eventDate);

  return <div>Evelist </div>
  
}

export default EventList
