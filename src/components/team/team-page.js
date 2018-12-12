import React, { Component } from "react"
import { Card, Container } from "semantic-ui-react"

import TeamMember from "./team-member-card"

import styles from "../../css/team/team.css"

class Team extends Component {
    constructor(props) {
        super(props)
        this.state = {
            maintainers: [],
        }
    }
    componentDidMount() {
        const URL = "/api/maintainer_site/maintainer_info"
    }

    render() {
        const maintainers = [
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
            {
                name: "Aman Sharma",
                image:
                    "https://react.semantic-ui.com/images/avatar/large/matthew.png",
                social: [
                    {
                        name: "GitHub",
                        url: "https://github.com/algomaster99",
                    },
                    {
                        name: "Facebook",
                        url: "#",
                    },
                    {
                        name: "dribbble",
                        url: "#",
                    },
                ],
            },
        ]
        return (
            <Container textAlign="center">
                <Card.Group itemsPerRow={4} stackable>
                    {maintainers.map(info => (
                        <TeamMember info={info} />
                    ))}
                </Card.Group>
            </Container>
        )
    }
}

export default Team
