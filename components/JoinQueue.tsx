"use client"

import { Id } from "@/convex/_generated/dataModel";

function JoinQueue({
  eventId,
  userId,
} : {
  eventId: Id<"events">;
  userId: Id<"users">;

}) {

  return  <div>JoinQueue</div>
  
}

export default JoinQueue;
