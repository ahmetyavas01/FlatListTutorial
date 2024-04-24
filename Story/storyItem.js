import { faker } from '@faker-js/faker';
import { FlatList, View } from 'react-native';
import { Story } from './storyList'; 

const DATA = Array(20).fill(null).map((e) => ({
    id: faker.string.uuid(),
    avatar: faker.image.avatarLegacy(),
    name: faker.internet.userName(),
    seen: faker.datatype.boolean()
}))


export const StoryItem = () => {
    return ( 
        <View>
            <FlatList
                horizontal
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Story
                        image={item.avatar}
                        seen={item.seen}
                        name={item.name}
                    />
                )}
            />
        </View>
    );
}
