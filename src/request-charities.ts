import {
  ApproveVote as ApproveVoteEvent,
  CharityApproved as CharityApprovedEvent,
  CharityCreated as CharityCreatedEvent,
  CharityDisapproved as CharityDisapprovedEvent,
  DisapproveVote as DisapproveVoteEvent
} from "../generated/RequestCharities/RequestCharities"
import {
  ApproveVote,
  CharityCreated,
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
  let _id = event.params.charityAddress.concatI32(event.params.charityId.toI32())
  let charity = CharityCreated.load(_id)

  if (!charity){
    charity = new CharityCreated(
      event.params.charityAddress.concatI32(event.params.charityId.toI32())
    )
    charity.charityId = event.params.charityId
    charity.charityAddress = event.params.charityAddress
    charity.name = event.params.name

    charity.blockNumber = event.block.number
    charity.blockTimestamp = event.block.timestamp
    charity.transactionHash = event.transaction.hash
    charity.status = event.params.status
  }
  charity.status = event.params.status

  charity.save()
}

export function handleCharityCreated(event: CharityCreatedEvent): void {
  let charity = new CharityCreated(
    event.params.charityAddress.concatI32(event.params.charityId.toI32())
  )
  charity.charityAddress = event.params.charityAddress
  charity.name = event.params.name
  charity.charityId = event.params.charityId
  charity.info = event.params.info
  charity.status = event.params.status

  charity.blockNumber = event.block.number
  charity.blockTimestamp = event.block.timestamp
  charity.transactionHash = event.transaction.hash

  charity.save()
}




export function handleCharityDisapproved(event: CharityDisapprovedEvent): void {
  let _id = event.params.charityAddress.concatI32(event.params.charityId.toI32())
  let charity = CharityCreated.load(_id)

  if (!charity){
    charity = new CharityCreated(
      event.params.charityAddress.concatI32(event.params.charityId.toI32())
    )
    charity.charityId = event.params.charityId
    charity.charityAddress = event.params.charityAddress
    charity.name = event.params.name

    charity.blockNumber = event.block.number
    charity.blockTimestamp = event.block.timestamp
    charity.transactionHash = event.transaction.hash
    charity.status = event.params.status
  }
  charity.status = event.params.status

  charity.save()
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