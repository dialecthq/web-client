import { useState } from 'react';
import { createContainer } from 'unstated-next';

function useUser() {
  const [user, setUser] = useState(null);

  return { user, setUser };
}

const User = createContainer(useUser);

export default User;
