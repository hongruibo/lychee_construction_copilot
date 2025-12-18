import { Policy } from '../../types';

type Props = { policies: Policy[] };

const ActivePoliciesCard = ({ policies }: Props) => {
  return (
    <div className="card">
      <div className="card-title">Active Policies Monitored</div>
      <div className="card-list">
        {policies.map((policy) => (
          <div key={policy.id} className="list-item">
            <div>{policy.name}</div>
            <span className={`tag ${policy.status === 'in-scope' ? 'tag-success' : 'tag-muted'}`}>
              {policy.status === 'in-scope' ? 'In scope' : 'Not relevant'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivePoliciesCard;
