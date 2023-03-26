import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Address, BigInt } from "@graphprotocol/graph-ts"
import { ApproveVote } from "../generated/schema"
import { ApproveVote as ApproveVoteEvent } from "../generated/RequestCharities/RequestCharities"
import { handleApproveVote } from "../src/request-charities"
import { createApproveVoteEvent } from "./request-charities-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let validator = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let charityId = BigInt.fromI32(234)
    let newApproveVoteEvent = createApproveVoteEvent(validator, charityId)
    handleApproveVote(newApproveVoteEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ApproveVote created and stored", () => {
    assert.entityCount("ApproveVote", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ApproveVote",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "validator",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "ApproveVote",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "charityId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
