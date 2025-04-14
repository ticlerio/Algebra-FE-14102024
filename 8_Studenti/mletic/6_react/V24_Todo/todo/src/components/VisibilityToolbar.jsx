import Button from 'react-bootstrap/button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { VISIBILITY_TYPES } from '../constants/const';

function getButtonVariant(visibilityType, currentVisibility) {
  return visibilityType === currentVisibility ? 'primary' : 'outline-primary';
}

export default function VisibilityToolbar({
  visibilityType,
  onVisibilityChange,
}) {
  const { ALL, ACTIVE, COMPLETED } = VISIBILITY_TYPES;

  function handleClick(value) {
    onVisibilityChange(value);
  }

  return (
    <ButtonGroup>
      <Button
        size="sm"
        onClick={() => handleClick(ALL)}
        variant={getButtonVariant(visibilityType, ALL)}
      >
        All
      </Button>
      <Button
        size="sm"
        onClick={() => handleClick(ACTIVE)}
        variant={getButtonVariant(visibilityType, ACTIVE)}
      >
        Active
      </Button>
      <Button
        size="sm"
        onClick={() => handleClick(COMPLETED)}
        variant={getButtonVariant(visibilityType, COMPLETED)}
      >
        Completed
      </Button>
    </ButtonGroup>
  );
}
