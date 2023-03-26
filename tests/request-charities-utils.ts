import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ApproveVote,
  CharityApproved,
  CharityCreated,
  CharityDisapproved,
  DisapproveVote
} from "../generated/RequestCharities/RequestCharities"

export function createApproveVoteEvent(
  validator: Address,
  charityId: BigInt
): ApproveVote {
  let approveVoteEvent = changetype<ApproveVote>(newMockEvent())

  approveVoteEvent.parameters = new Array()

  approveVoteEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  approveVoteEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )

  return approveVoteEvent
}

export function createCharityApprovedEvent(
  charityId: BigInt,
  charityAddress: Address,
  name: string,
  status: i32
): CharityApproved {
  let charityApprovedEvent = changetype<CharityApproved>(newMockEvent())

  charityApprovedEvent.parameters = new Array()

  charityApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )
  charityApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "charityAddress",
      ethereum.Value.fromAddress(charityAddress)
    )
  )
  charityApprovedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  charityApprovedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return charityApprovedEvent
}

export function createCharityCreatedEvent(
  charityAddress: Address,
  name: string,
  charityId: BigInt,
  info: string,
  status: i32
): CharityCreated {
  let charityCreatedEvent = changetype<CharityCreated>(newMockEvent())

  charityCreatedEvent.parameters = new Array()

  charityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "charityAddress",
      ethereum.Value.fromAddress(charityAddress)
    )
  )
  charityCreatedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  charityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )
  charityCreatedEvent.parameters.push(
    new ethereum.EventParam("info", ethereum.Value.fromString(info))
  )
  charityCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return charityCreatedEvent
}

export function createCharityDisapprovedEvent(
  charityAddress: Address,
  charityId: BigInt,
  name: string,
  status: i32
): CharityDisapproved {
  let charityDisapprovedEvent = changetype<CharityDisapproved>(newMockEvent())

  charityDisapprovedEvent.parameters = new Array()

  charityDisapprovedEvent.parameters.push(
    new ethereum.EventParam(
      "charityAddress",
      ethereum.Value.fromAddress(charityAddress)
    )
  )
  charityDisapprovedEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )
  charityDisapprovedEvent.parameters.push(
    new ethereum.EventParam("name", ethereum.Value.fromString(name))
  )
  charityDisapprovedEvent.parameters.push(
    new ethereum.EventParam(
      "status",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(status))
    )
  )

  return charityDisapprovedEvent
}

export function createDisapproveVoteEvent(
  validator: Address,
  charityId: BigInt
): DisapproveVote {
  let disapproveVoteEvent = changetype<DisapproveVote>(newMockEvent())

  disapproveVoteEvent.parameters = new Array()

  disapproveVoteEvent.parameters.push(
    new ethereum.EventParam("validator", ethereum.Value.fromAddress(validator))
  )
  disapproveVoteEvent.parameters.push(
    new ethereum.EventParam(
      "charityId",
      ethereum.Value.fromUnsignedBigInt(charityId)
    )
  )

  return disapproveVoteEvent
}
