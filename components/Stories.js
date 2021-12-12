import faker, { image } from "faker";
import { useEffect, useState } from "react";
import Story from "./Story";
import { useSession } from "next-auth/react";

function Stories() {
    const [suggestions, setSuggestions] = useState([]);
    const { data: session} = useSession();

    useEffect(() => {
      const suggestions = [...Array(20)].map((_, i) => ({
        ...faker.helpers.contextualCard(),
        id: i,
      }));

      setSuggestions(suggestions);
    }, []);

/*
    {suggestions.map((profile) => (
      <Story 
      key={profile.id} 
      img={profile.avatar} 
      username={profile.username}
      />
  ))}*/

  /*{<div>
    <img className="h-14 w-14 rounded-full 
      p-[1.5px] border-yellow-500 border-2
      object-contain cursor-pointer
      hover:scale-110 transition transform
      duration-200 ease-out"
    src={session?.user?.image} 
    
    />
    <p className="text-xs w-14 truncate
       text-center">{session?.user?.username}
    </p>
  </div>
    
  }
  {<Story 
    img="/images/geras.jpeg" 
    username="Geras_God"
    />}
  {<Story 
    img="/images/cholo.jpeg" 
    username="jc.cv"
    />}
  {<Story 
    img="/images/cristian.jpeg" 
    username="EduardoSilva"
    />}
  {<Story 
    img="/images/daniela.jpeg" 
    username="Dani"
    />}
  {<Story 
    img="/images/cesarProf.jpeg" 
    username="Cesar-prof"
    />}
  {<Story 
    img="/images/gasca.jpeg" 
    username="ElGascaa"
    />}
    {<Story 
    img="/images/iri.jpeg" 
    username="Iridian R."
    />}
    {<Story 
    img="/images/juan.jpeg" 
    username="Juan Pantoja"
    />}
    {<Story 
    img="/images/kike.jpeg" 
    username="E.H.H"
    />}
    {<Story 
    img="/images/moy.jpeg" 
    username="TheMoy_god69"
    />}
    {<Story 
    img="/images/profaIngles.jpeg" 
    username="TeacherYess"
    />}
    {<Story 
    img="/images/sori.jpeg" 
    username="Soriano"
    />}*/



    return (
        <div className="flex space-x-2 p-6 bg-white
        mt-8 border-gray-200 border rounded-sm
        overflow-x-scroll scrollbar-thin 
        scrollbar-thumb-black">
          
          {session && (
            <Story img={session.user.image} username={session.user.username}/>
          )}
          {suggestions.map((profile) => (
            <Story 
              key={profile.id} 
              img={profile.avatar} 
              username={profile.username}
            />
          ))}
        </div>
    );
}

export default Stories;
