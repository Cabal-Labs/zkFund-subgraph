import {
  ApproveVote as ApproveVoteEvent,
  CharityApproved as CharityApprovedEvent,
  CharityCreated as CharityCreatedEvent,
  CharityDisapproved as CharityDisapprovedEvent,
  DisapproveVote as DisapproveVoteEvent
} from "../generated/RequestCharities/RequestCharities"
import {
  ApproveVote,
  CharityApproved,
  CharityCreated,
  CharityDisapproved,
  DisapproveVote
} from "../generated/schema"

export function handleApproveVote(event: ApproveVoteEvent): void {
  let entity = new ApproveVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.validator = event.params.validator
  entity.charityId = event.params.charityId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharityApproved(event: CharityApprovedEvent): void {
  let entity = new CharityApproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.charityId = event.params.charityId
  entity.charityAddress = event.params.charityAddress
  entity.name = event.params.name
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharityCreated(event: CharityCreatedEvent): void {
  let entity = new CharityCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.charityAddress = event.params.charityAddress
  entity.name = event.params.name
  entity.charityId = event.params.charityId
  entity.info = event.params.info
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCharityDisapproved(event: CharityDisapprovedEvent): void {
  let entity = new CharityDisapproved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.charityAddress = event.params.charityAddress
  entity.charityId = event.params.charityId
  entity.name = event.params.name
  entity.status = event.params.status

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDisapproveVote(event: DisapproveVoteEvent): void {
  let entity = new DisapproveVote(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.validator = event.params.validator
  entity.charityId = event.params.charityId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
