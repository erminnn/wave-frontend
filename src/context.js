import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = async (state, action) => {
  switch (action.type) {
    case "FILTER_TALENTS":
      const { intonations, voiceTypes, languages } = action.payload;
      console.log(action.payload);
      const talents = await fetchTalents();
      console.log(talents);
      const filteredTalents = [];

      talents.forEach((talent) => {
        if (intonations !== "" && voiceTypes !== "" && languages !== "") {
          if (
            talent.intonations.includes(`${intonations}`) &&
            talent.voiceTypes.includes(`${voiceTypes}`) &&
            talent.languages.includes(`${languages}`)
          ) {
            filteredTalents.push(talent);
          }
        } else if (
          intonations === "" &&
          voiceTypes === "" &&
          languages === ""
        ) {
          filteredTalents = talents;
        } else if (
          intonations !== "" &&
          voiceTypes === "" &&
          languages === ""
        ) {
          if (talent.intonations.includes(`${intonations}`)) {
            filteredTalents.push(talent);
          }
        } else if (
          intonations !== "" &&
          voiceTypes !== "" &&
          languages === ""
        ) {
          if (
            talent.intonations.includes(`${intonations}`) &&
            talent.voiceTypes.includes(`${voiceTypes}`)
          ) {
            filteredTalents.push(talent);
          }
        } else if (
          intonations !== "" &&
          voiceTypes === "" &&
          languages !== ""
        ) {
          if (
            talent.intonations.includes(`${intonations}`) &&
            talent.languages.includes(`${languages}`)
          ) {
            filteredTalents.push(talent);
          }
        }
      });

      console.log(filteredTalents);

      return {
        ...state,
        talents: filteredTalents,
      };
    default:
      return state;
  }
};

const fetchTalents = async () => {
  const talents = [];
  const token = localStorage.getItem("token");
  const headers = {
    Authorization: `Bearer ${token}`,
  };

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
    const intonationsArray = [];
    intonations.forEach((i) => {
      intonationsArray.push(i.type);
    });

    const responseLanguage = await axios.get(
      `${responseTalents[i]._links.languagesSpoken.href}`,
      {
        headers,
      }
    );

    const languages = responseLanguage.data._embedded.languages;
    const languagesArray = [];
    languages.forEach((l) => {
      languagesArray.push(l.name);
    });

    const responseVoiceType = await axios.get(
      `${responseTalents[i]._links.voiceTypes.href}`,
      {
        headers,
      }
    );
    const voiceTypes = responseVoiceType.data._embedded.voiceTypes;
    const voiceTypesArray = [];
    voiceTypes.forEach((vt) => {
      voiceTypesArray.push(vt.name);
    });
    const talent = {
      id: i,
      firstname: responseTalents[i].firstName,
      lastname: responseTalents[i].lastName,
      languages: languagesArray,
      voiceTypes: voiceTypesArray,
      country: responseTalents[i].country,
      intonations: intonationsArray,
      voice_sample_url: "assets/img/mus.mp3",
      voice_sample_name:
        "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
      user_img: "assets/img/theme/team-4-800x800.jpg",
    };
    talents.push(talent);
  }
  return talents;
};

export class Provider extends Component {
  state = {
    talents: [],
    dispatch: async (action) => {
      await this.setState((state) => reducer(state, action));
    },
  };

  async componentDidMount() {
    const talents = await fetchTalents();
    this.setState({ ...this.state, talents: talents });
  }
  componentDidUpdate() {
    console.log(this.state);
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
