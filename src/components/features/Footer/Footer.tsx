import React from 'react';
import { Link, Stack, Text } from '@chakra-ui/react';

const Footer: React.FC = ({}) => {
  return (
    <footer>
      <Stack>
        <Text>
          Made with db Cocktails{' '}
          <Link href="https://github.com/tatarastrata/cocktail-party">
            and many other things
          </Link>
        </Text>
        <br />
        <Text>
          <Link href="https://mint-wolfberry-2df.notion.site/Tamara-Ostapets-Frontend-Developer-27f0f715bf964d3fab3c5cd026c02053">
            Hire me ❣️
          </Link>
        </Text>
      </Stack>
    </footer>
  );
};

export default Footer;
