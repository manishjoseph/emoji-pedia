import React from "react";
import Emoji from "./Emoji";
import emojipedia from "../emojipedia";
function createEmoji(emoji) {
  return (
    <Emoji
      id={emoji.id}
      key={emoji.id}
      name={emoji.name}
      emoji={emoji.emoji}
      emojiMeaning={emoji.emojiMeaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(createEmoji)}</dl>
    </div>
  );
}

export default App;
