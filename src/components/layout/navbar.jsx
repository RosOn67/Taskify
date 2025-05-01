import React, { useState } from "react";

export default function Navbar() {
  return (
    <header className=" navbar row-start-1 row-end-2 col-start-2 col-end-3 justify-self-end flex items-center">
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M466-146v-188h28v80h320v28H494v80h-28Zm-320-80v-28h188v28H146Zm160-160v-80H146v-28h160v-80h28v188h-28Zm160-80v-28h348v28H466Zm160-160v-188h28v80h160v28H654v80h-28Zm-480-80v-28h348v28H146Z"/></svg>
        <svg xmlns="http://www.w3.org/2000/svg" height="28px" viewBox="0 -960 960 960" width="28px" fill="#000000"><path d="M172-292v-28h175v28H172Zm0-174v-28h395v28H172Zm0-174v-28h616v28H172Z"/></svg>    
    </header>
  );
}
