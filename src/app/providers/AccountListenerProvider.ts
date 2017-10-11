import {AccountListener} from 'nem-library';

export function AccountListenerProvider(): AccountListener {
  return new AccountListener();
}
