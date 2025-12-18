import { RiskFlag } from '../../types';

type Props = { risks: RiskFlag[] };

const RiskFlagsCard = ({ risks }: Props) => {
  return (
    <div className="card">
      <div className="card-title">Risk Flags</div>
      <div className="card-list">
        {risks.map((risk) => (
          <div key={risk.id} className="list-item">
            <div>{risk.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RiskFlagsCard;
