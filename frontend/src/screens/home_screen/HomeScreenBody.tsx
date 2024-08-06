import { FlatList } from 'react-native';
import HomeScreenBodyReminder from './HomeScreenBodyReminder';
import BaseBody from '../../core/components/bodies/BaseBody';

const HomeScreenBody = () => {
  return (
    <BaseBody>
      <FlatList
        data={[
          { key: 'Devin' },
          { key: 'Dan' },
          { key: 'Dominic' },
          { key: 'Jackson' },
          { key: 'James' },
          { key: 'Joel' },
          { key: 'John' },
          { key: 'Jillian' },
          { key: 'Jimmy' },
          { key: 'Julie' },
        ]}
        renderItem={({ item }) => <HomeScreenBodyReminder />}
      />
    </BaseBody>
  );
};

export default HomeScreenBody;