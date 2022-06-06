


import { OverlayTrigger, Tooltip,Popover,Button} from 'react-bootstrap';
import { SvgIcon } from '@mui/material';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import { useEffect } from 'react';
import { ProblemContext } from '../contexts/ProblemProvider';
import { getThemeProps } from '@mui/system';

function popOver(props) {
  //console.log(props)
  return(
  <Popover id="popover-basic" className="tooltip">
      <Popover.Header as="h3">
        {props.toolTip.header}
    </Popover.Header>
      <Popover.Body>
        {props.toolTip.formalDef}
        <br></br>
        <br></br>
        {props.toolTip.info}
    </Popover.Body>
  </Popover>
  );

}
  
function PopoverTooltipHover(props) {
  return(
    <OverlayTrigger trigger={["hover","focus"]} placement="bottom" overlay={popOver(props)}>
      
      <InfoOutlinedIcon>
        <Button variant="success">
        </Button>
        </InfoOutlinedIcon>
     
      
    </OverlayTrigger>
  )
}
  
export default PopoverTooltipHover;
  
