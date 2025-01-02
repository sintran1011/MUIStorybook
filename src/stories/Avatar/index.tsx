import { Avatar as AvatarMui } from '@mui/material';
import { forwardRef } from 'react';

interface AvatarProps extends React.ComponentProps<typeof AvatarMui> {
  size?: 'sm' | 'md' | 'xl';
}

// Avatar component
const Avatar = forwardRef<HTMLDivElement, AvatarProps>((props, ref) => {
  const { size = 'md', alt = 'Avatar', ...rest } = props;

  return (
    <AvatarMui
      ref={ref}
      sx={{
        width: { ...avatarSizes[size] },
        height: { ...avatarSizes[size] },
        borderRadius: '50%',
      }}
      {...rest}>
      {props.children}
    </AvatarMui>
  );
});

const avatarSizes = {
  sm: { xs: 16, sm: 24, md: 32, lg: 40, xl: 48 },
  md: { xs: 24, sm: 32, md: 40, lg: 48, xl: 56 },
  xl: { xs: 32, sm: 40, md: 48, lg: 56, xl: 64 },
};

export default Avatar;
