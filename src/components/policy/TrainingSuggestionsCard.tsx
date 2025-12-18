import { TrainingItem } from '../../types';

type Props = { trainings: TrainingItem[] };

const formatLabel = (item: TrainingItem) => {
  const prefix = item.type === 'complete' ? 'Complete' : 'Review';
  return `${prefix}: "${item.title}" (${item.durationMinutes} minutes)`;
};

const TrainingSuggestionsCard = ({ trainings }: Props) => {
  return (
    <div className="card">
      <div className="card-title">Training Suggestions</div>
      <div className="card-list">
        {trainings.map((item) => (
          <div key={item.id} className="list-item">
            <div>{formatLabel(item)}</div>
            <span className="tag tag-muted">{item.type === 'complete' ? 'Mandatory' : 'Recommended'}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingSuggestionsCard;
