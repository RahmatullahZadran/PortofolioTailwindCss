    import { Fragment, useState } from 'react';

    const people = [
    {   
        id: 1,
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 2,
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        gitHubUrl: 'https://github.com/RahmatullahZadran'
        },

    
    {
        id: 3,
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 4,
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
    {
        id: 5,
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id: 6,
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    
    {   
        id : 7,
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
        'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
        id : 8,
        name: 'Michael Foster',
        role: 'Co-Founder / CTO',
        imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    ];

    export default function Example() {
        const [githubScaled, setGithubScaled] = useState({});
      
        const handleGithubMouseEnter = (id) => {
          setGithubScaled((prev) => ({ ...prev, [id]: true }));
        };
      
        const handleGithubMouseLeave = (id) => {
          setGithubScaled((prev) => ({ ...prev, [id]: false }));
        };
        return (
            <div className="bg-gray-900 py-10 sm:py-10 ">
            <div className="mx-auto  grid max-w-7xl gap-x-8 gap-y-8 px-6 lg:px-8 lg:px-8 xl:grid-cols-3">
                {/* Project Section */}
                <div className="max-w-2xl md:col-start-1 lg:col-start-1 xl:col-start-1">
                <h2 className="text-3xl  font-bold tracking-tight text-white sm:text-4xl ">My Projects</h2>
                </div>
    
                {/* People Section */}
                <ul role="list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 sm:gap-y-3 xl:col-span-4">
                {people.map((person) => (
                    <li key={person.name}>
                    <div className="flex flex-col items-start"> 
                        <img className="h-40 w-60 rounded" src={person.imageUrl} alt={person.id} />
                        <div>
                        <a
                             href={person.gitHubUrl}
                             target="_blank"
                             onMouseEnter={() => handleGithubMouseEnter(person.id)}
                             onMouseLeave={() => handleGithubMouseLeave(person.id)}
                        >
                            <img className={`h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5 xl:h-6 xl:w-6 ${githubScaled[person.id] ? 'scale-110' : ''}`} src="https://firebasestorage.googleapis.com/v0/b/protofolio-44836.appspot.com/o/github%20(1).png?alt=media&token=eb89d9c4-1c80-4be8-8124-fc6dceb7add8" alt="GitHub Icon" />
                        </a>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        );
        }
    