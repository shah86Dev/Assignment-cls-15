import React from 'react'
import Image from "next/image"

const hero = () => {
  return (
    <div className="bg-gradient-to-br from to-blue-50 via-gray-200 from-slate-400 py-10">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8">
            {[
                { title: "Posts", image: "/images/posts.png", link: "/posts" },
                { title: "Comments", image: "/images/comment.gif", link: "/comments" },
                { title: "Albums", image: "/images/album.png", link: "/albums" },
                { title: "Photos", image: "/images/photos.png", link: "/photos" },
                { title: "Todos", image: "/images/todo.png", link: "/todos" },
                { title: "Users", image: "/images/user.png", link: "/users" },
            ].map((item, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
                    <Image
                    src={item.image} 
                    alt={item.title} 
                    width={64}
                    height={64}
                    className="mx-auto mb-4" 
                    />
                    <div className="p-4">
                        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                        <a href={item.link} className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600">
                            Explore {item.title}
                        </a>
                    </div>
                </div>
            ))}
      </div>
    </div>
  )
}

export default hero
