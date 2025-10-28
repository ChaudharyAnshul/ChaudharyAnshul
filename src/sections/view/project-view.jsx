import { useState } from 'react';
import PropTypes from 'prop-types';

import Card from '@mui/material/Card';
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import CardHeader from '@mui/material/CardHeader';
import Typography from '@mui/material/Typography';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';

import Scrollbar from '../../components/scrollbar';

import ProjectTableHead from '../project-table-head';
import ProjectUserTableRow from '../project-table-row';

// ----------------------------------------------------------------------

export default function ProjectTable({title, subheader, dataTable, linkURL, linkText}) {
  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setPage(0);
    setRowsPerPage(parseInt(event.target.value, 10));
  };
  return (
      <Card>
        <CardHeader 
          title={
            <Typography variant="h6">
              {title} - <Link href={linkURL} target="_blank">{linkText}</Link>
            </Typography>
          } 
          subheader={subheader} 
          sx={{ mb: 2.5 }} 
        />
        <Scrollbar>
          <TableContainer sx={{ overflow: 'unset' }}>
            <Table sx={{ minWidth: 800 }}>
              <ProjectTableHead
                headLabel={[
                  { id: 'github', label: 'GitHub'},
                  { id: 'project-name', label: 'Project Name'},
                  { id: 'tech-stack', label: 'Tech Stack'},
                ]}
              />
              <TableBody>
                {dataTable
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => (
                    <ProjectUserTableRow
                      key={row.id}
                      projectName={row.projectName}
                      techStack={row.techStack}
                      gitURL={row.gitURL}
                    />
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Scrollbar>

        <TablePagination
          page={page}
          component="div"
          count={dataTable.length}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          rowsPerPageOptions={[10, 20]}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
  );
}


ProjectTable.propTypes = {
  dataTable: PropTypes.array.isRequired,
  title: PropTypes.string,
  subheader: PropTypes.string,
  linkURL: PropTypes.string,
  linkText: PropTypes.string,
};