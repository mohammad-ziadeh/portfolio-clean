import React from 'react';

// material-ui
import { styled } from '@mui/material/styles';
import LinearProgress from '@mui/material/LinearProgress';

// loader style
const LoaderWrapper = styled('div')(({ theme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 2001,
  width: '100%',
  '& > * + *': {
    marginTop: theme.spacing(2)
  }
}));

// ==============================|| LOADER ||============================== //

const Loader = () => {
  return (
    <LoaderWrapper>
      <LinearProgress sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.2)', // track color
        '& .MuiLinearProgress-bar': {
          backgroundColor: '#fff' // bar color
        }
      }} />
    </LoaderWrapper>
  );
};

export default Loader;
