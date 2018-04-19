import { VoteComponent } from './vote.component';

describe('VoteComponent', () => {
  let component: VoteComponent;

  beforeEach(() => {
    component = new VoteComponent();
  });

  it('should raise voteChanged event when upVoted', () => {
    // Arrange
    let totalVotes = null;
    component.voteChanged.subscribe(tv => (totalVotes = tv)); // Observable can be subscribed
    // Act
    component.upVote();
    // Assert
    expect(totalVotes).not.toBeNull();
    expect(totalVotes).toBe(1);
  });
});
