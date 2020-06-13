import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const globalState = {
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
};
const reducer = (state, action) => {
  switch (action.type) {
    case "FILTER_TALENTS":
      const { language, voice_age, gender } = state.filter;
      const filteredTalents = [];
      globalState.talents.forEach((talent) => {
        if (
          talent.language == language &&
          talent.gender === gender &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        } else if (
          language === "default" &&
          gender === "default" &&
          voice_age === "default"
        ) {
          filteredTalents = globalState.talents;
        } else if (
          talent.language === language &&
          gender === "default" &&
          voice_age === "default"
        ) {
          filteredTalents.push(talent);
        } else if (
          talent.language === language &&
          talent.gender === gender &&
          voice_age === "default"
        ) {
          filteredTalents.push(talent);
        } else if (
          talent.language === language &&
          gender === "default" &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        } else if (
          language === "default" &&
          gender === "default" &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        } else if (
          language === "default" &&
          talent.gender === gender &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        } else if (
          talent.language === language &&
          gender === "default" &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        } else if (
          language === "default" &&
          talent.gender === gender &&
          voice_age === "default"
        ) {
          filteredTalents.push(talent);
        } else if (
          talent.language === language &&
          talent.gender === gender &&
          voice_age === "default"
        ) {
          filteredTalents.push(talent);
        } else if (
          language === "default" &&
          talent.gender === gender &&
          talent.voice_age === voice_age
        ) {
          filteredTalents.push(talent);
        }
      });
      return {
        ...state,
        talents: filteredTalents,
      };
    case "UPDATE_FILTER":
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export class Provider extends Component {
  state = {
    talents: [],
    filter: {
      gender: "",
      voice_age: "",
      language: "",
    },
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  async componentDidMount() {
    const talents = [];
    const token = localStorage.getItem("token");
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    console.log(token);

    const res = await axios.get("http://localhost:8080/api/talents", {
      headers,
    });

    const responseTalents = res.data._embedded.talents;
    for (let i = 0; i < responseTalents.length; i++) {
      const responseIntonations = await axios.get(
        `${responseTalents[i]._links.intonations.href}`,
        {
          headers,
        }
      );
      const intonations = responseIntonations.data._embedded.intonations;

      const responseLanguage = await axios.get(
        `${responseTalents[i]._links.languagesSpoken.href}`,
        {
          headers,
        }
      );

      const languages = responseLanguage.data._embedded.languages;

      const responseVoiceType = await axios.get(
        `${responseTalents[i]._links.voiceTypes.href}`,
        {
          headers,
        }
      );
      const voiceTypes = responseVoiceType.data._embedded.voiceTypes;
      const talent = {
        id: i,
        firstname: responseTalents[i].firstName,
        lastname: responseTalents[i].lastName,
        languages: languages,
        voiceTypes: voiceTypes,
        country: responseTalents[i].country,
        intonations: intonations,
        voice_sample_url: "assets/img/mus.mp3",
        voice_sample_name:
          "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
        user_img: "assets/img/theme/team-4-800x800.jpg",
      };
      talents.push(talent);
    }

    this.setState({
      talents: talents,
    });
  }
  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
