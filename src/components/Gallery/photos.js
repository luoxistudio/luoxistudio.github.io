const PATH = './photos/group_';

const groups = [
    {
        groupId: 0,
        photoCount: 2
    },
    {
        groupId: 1,
        photoCount: 12
    },
    {
        groupId: 2,
        photoCount: 4
    },
    {
        groupId: 3,
        photoCount: 6
    },
    {
        groupId: 4,
        photoCount: 7
    },
    {
        groupId: 5,
        photoCount: 7
    },
    {
        groupId: 6,
        photoCount: 1
    },
    {
        groupId: 7,
        photoCount: 9
    },
    {
        groupId: 8,
        photoCount: 10
    },
    {
        groupId: 9,
        photoCount: 8
    },
    {
        groupId: 10,
        photoCount: 3
    },
    {
        groupId: 11,
        photoCount: 16
    },
    {
        groupId: 12,
        photoCount: 10
    },
    {
        groupId: 13,
        photoCount: 11
    },
    {
        groupId: 14,
        photoCount: 11
    },
    {
        groupId: 15,
        photoCount: 11
    }
]

let photos = [];

groups.forEach((group) => {
    for(let i = 1; i <= group.photoCount; i++){
        photos.push({
            groupId: group.groupId,
            url: `${PATH}${group.groupId}/${i}.jpg`
        });
    }
});

export default photos;