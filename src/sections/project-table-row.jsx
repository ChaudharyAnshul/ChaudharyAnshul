import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

export default function ProjectUserTableRow({
  gitURL,
  projectName,
  techStack,
}) {
  return (
      <TableRow hover tabIndex={-1}>
        <TableCell padding="normal">
          <Button component="a" href={gitURL} variant="contained" target="_blank">
            Visit
          </Button>
        </TableCell>

        <TableCell component="th" scope="row" padding="normal">
            <Typography variant="subtitle2" noWrap>
              {projectName}
            </Typography>
        </TableCell>

        <TableCell scope="row" padding="normal">
            <Typography variant="subtitle2">
              {techStack}
            </Typography>
        </TableCell>
      </TableRow>
  );
}

ProjectUserTableRow.propTypes = {
  gitURL: PropTypes.string,
  projectName: PropTypes.string,
  techStack: PropTypes.any,
};
