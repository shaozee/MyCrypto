import React from 'react';
import { Button, Heading, Typography } from '@mycrypto/ui';

import { ROUTE_PATHS } from 'v2/config';
import './AccountScreen.scss';

// Legacy
import addIcon from 'common/assets/images/icn-add.svg';
import settingsIcon from 'common/assets/images/icn-settings.svg';
import unlockIcon from 'common/assets/images/icn-unlock.svg';
import { truncate } from 'v2/utils';
import { Account } from 'v2/components';

export default {
  title: 'Current Account',
  content: (
    <section className="AccountScreen">
      <div className="AccountScreen-current">
        <Account
          title="Example #1"
          address="0x80200997f095da94E404F7E0d581AAb1fFba9f7d"
          truncate={truncate}
        />
      </div>
      <Heading as="h2" className="AccountScreen-heading">
        Recent Accounts
      </Heading>
      <div className="AccountScreen-recent">
        <Heading as="h3" className="AccountScreen-recent-heading">
          You only have one account at the moment
        </Heading>
        <Typography>
          To organize your funds into more than one account, create another account now.
        </Typography>
        <Button className="AccountScreen-recent-button">Add Account</Button>
      </div>
    </section>
  ),
  actions: [
    {
      icon: addIcon,
      title: 'Add New Account',
      link: ROUTE_PATHS.ADD_ACCOUNT.path
    },
    {
      icon: settingsIcon,
      title: 'Settings',
      link: ROUTE_PATHS.SETTINGS.path
    },
    {
      icon: unlockIcon,
      title: 'Lock Wallet'
    }
  ]
};
