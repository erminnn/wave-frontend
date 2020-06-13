import React, { Component } from "react";

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TALENTS":
      const { filter_field, filter_value } = action.payload;
      console.log(filter_field, filter_value);

      const filteredTalents = [];
      if (filter_field === "voice_age") {
        state.talents.forEach((talent) => {
          if (talent.voice_age === filter_value) {
            filteredTalents.push(talent);
          }
        });
      } else if (filter_field === "gender") {
        state.talents.forEach((talent) => {
          if (talent.gender === filter_value) {
            filteredTalents.push(talent);
          }
        });
      } else {
        state.talents.forEach((talent) => {
          if (talent.language === filter_value) {
            filteredTalents.push(talent);
          }
        });
      }
      return {
        ...state,
        talents: filteredTalents,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    talents: [
      {
        id: 1,
        firstname: "Ermin Bosnian Young Adult",
        lastname: "Omeragic",
        language: "Bosnian",
        gender: "Male",
        country: "Bosnia and Herzegovina",
        voice_age: "Young Adult",
        voice_sample_url: "assets/img/mus.mp3",
        voice_sample_name:
          "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
        user_img: "assets/img/theme/team-4-800x800.jpg",
      },
      {
        id: 2,
        firstname: "Ermin2 Young Adult English",
        lastname: "Omeragic",
        language: "English",
        gender: "Both",
        country: "Bosnia and Herzegovina",
        voice_age: "Young Adult",
        voice_sample_url: "assets/img/mus.mp3",
        voice_sample_name:
          "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
        user_img: "assets/img/theme/team-4-800x800.jpg",
      },
      {
        id: 3,
        firstname: "Ermin3 Senior Deutsch",
        lastname: "Omeragic",
        language: "Deutsch",
        gender: "Male",
        country: "Bosnia and Herzegovina",
        voice_age: "Senior",
        voice_sample_url: "assets/img/mus.mp3",
        voice_sample_name:
          "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
        user_img: "assets/img/theme/team-4-800x800.jpg",
      },
    ],
    filter: {
      gender: "",
      voice_age: "",
      language: "",
    },
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
