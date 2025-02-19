import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import WaterDropOutlinedIcon from '@mui/icons-material/WaterDropOutlined';
import DeviceThermostatOutlinedIcon from '@mui/icons-material/DeviceThermostatOutlined';
import WaterOutlinedIcon from '@mui/icons-material/WaterOutlined';
import ReportBanner from './Banners/ReportBanner';
import SchedulesBanner from './Banners/SchedulesBanner';
import { Link } from 'react-router-dom';

function SideBar() {
  return (
    <Box
      sx={{
        backgroundColor: 'secondary.dark',
        width: '440px',
        // height: 'calc(100vh - 32px - 35px - 10px)',
        height: 'max-height',
        alignItems: 'center',
        borderRadius: '40px'
      }}
    >
      <Box sx={{ m: 4 }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '20px', mb: 2 }}>
          My Devices
        </Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between'
          }}
        >
          <Box
            sx={{
              width: '182px',
              height: '100px',
              backgroundColor: 'primary.main',
              borderRadius: '30px',
              alignItems: 'center',
              textDecoration: 'none'
            }}
            component={Link}
            to="/device"
          >
            <WaterDropOutlinedIcon
              sx={{ fontSize: '50px', color: 'white', mt: 1, ml: 2.5 }}
            />
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '20px',
                color: 'white',
                ml: 2.5
              }}
            >
              Humidity
            </Typography>
          </Box>
          <Box
            sx={{
              width: '182px',
              height: '100px',
              backgroundColor: '#F4C427',
              borderRadius: '30px',
              alignItems: 'center',
              textDecoration: 'none'
            }}
            component={Link}
            to="/device"
          >
            <DeviceThermostatOutlinedIcon
              sx={{ fontSize: '50px', color: 'white', mt: 1, ml: 2.5 }}
            />
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '20px',
                color: 'white',
                ml: 2.5
              }}
            >
              Temperature
            </Typography>
          </Box>
        </Box>
        <Box sx={{ display: 'flex' }}>
          <Box
            sx={{
              width: '182px',
              height: '100px',
              backgroundColor: '#3ACBE9',
              borderRadius: '30px',
              alignItems: 'center',
              mt: 1.75,
              textDecoration: 'none'
            }}
            component={Link}
            to="/device"
          >
            <WaterOutlinedIcon
              sx={{ fontSize: '50px', color: 'white', mt: 1, ml: 2.5 }}
            />
            <Typography
              sx={{
                fontSize: '18px',
                fontWeight: '20px',
                color: 'white',
                ml: 2.5
              }}
            >
              Water
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box sx={{ m: 4 }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '20px', mb: 2 }}>
          Report
        </Typography>
        <Box
          component={Link}
          to="/report"
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
        >
          <ReportBanner />
        </Box>
      </Box>
      <Box sx={{ m: 4 }}>
        <Typography sx={{ fontSize: '18px', fontWeight: '20px', mb: 2 }}>
          Schedules
        </Typography>
        <Box
          component={Link}
          to="/schedules"
          sx={{ textDecoration: 'none', '&:hover': { textDecoration: 'none' } }}
        >
          <SchedulesBanner />
        </Box>
      </Box>
    </Box>
  );
}

export default SideBar;
