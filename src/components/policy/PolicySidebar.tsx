import { Policy, RiskFlag, TrainingItem } from '../../types';
import ActivePoliciesCard from './ActivePoliciesCard';
import RiskFlagsCard from './RiskFlagsCard';
import TrainingSuggestionsCard from './TrainingSuggestionsCard';

type Props = {
  policies: Policy[];
  risks: RiskFlag[];
  trainings: TrainingItem[];
};

const PolicySidebar = ({ policies, risks, trainings }: Props) => {
  return (
    <aside className="policy-sidebar">
      <ActivePoliciesCard policies={policies} />
      <RiskFlagsCard risks={risks} />
      <TrainingSuggestionsCard trainings={trainings} />
    </aside>
  );
};

export default PolicySidebar;
