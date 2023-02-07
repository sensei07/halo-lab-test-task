interface INavItems {
    name: string,
    link: string
}

interface ITeamItems {
    id: number,
    imageUrl: string,
    width: number,
    height: number,
    alt: string
}

export const NAV_ITEMS: INavItems[] = [
    {name: 'Home', link: '/'},
    {name: 'Our mission', link: '/our-mission'},
    {name: 'Places', link: '/places'},
    {name: 'Team', link: 'team'}
];


export const TEAM_ITEMS: ITeamItems[] = [
    {
        id: 1,
        imageUrl: '/images/team/team1.png',
        width: 323,
        height: 274,
        alt: 'person 1'
    },
    {
        id: 2,
        imageUrl: '/images/team/team2.png',
        width: 334,
        height: 263,
        alt: 'person 2',
    },
    {
        id: 3,
        imageUrl: '/images/team/team3.png',
        width: 276,
        height: 312,
        alt: 'person 2',
    }
];


