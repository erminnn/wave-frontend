import React, { Component } from "react";
import axios from "axios";
const Context = React.createContext();

const reducer = async (state, action) => {
  switch (action.type) {
    case "FILTER_TALENTS":
      const { intonations: intonation, voiceTypes: voiceType, languages } = action.payload;
      console.log("payload", action.payload);
      const talents = await fetchTalents();
      console.log("talents", talents);
      let filteredTalents = [];

      filteredTalents = talents.filter( talent => {
         return ((intonation == "" || talent.intonations.some( el => el.type === intonation) ) &&
          (voiceType == "" || talent.voiceTypes.some( el => el.name === voiceType)) &&
          (languages == "" || talent.languagesSpoken.some(languages)))
      });

      /*talents.forEach((talent) => {
        if(intonations !== "" && voiceTypes !== "" && languages !== "")
          return talents;
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
        } else if (
          intonations === "" &&
          voiceTypes !== "" &&
          languages !== ""
        ) {
          if (
            talent.voiceTypes.includes(`${voiceTypes}`) &&
            talent.languages.includes(`${languages}`)
          ) {
            filteredTalents.push(talent);
          }
        } else if (
          intonations === "" &&
          voiceTypes === "" &&
          languages !== ""
        ) {
          if (talent.languages.includes(`${languages}`)) {
            filteredTalents.push(talent);
          }
        } else if (
          intonations === "" &&
          voiceTypes !== "" &&
          languages === ""
        ) {
          if (talent.voiceTypes.includes(`${voiceTypes}`)) {
            filteredTalents.push(talent);
          }
        }
      });*/
      console.log("filtered", filteredTalents);
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
  const res = await axios.get("http://localhost:8080/api/talents?projection=talentProj");
  console.log("projection", res)

  const responseTalents = res.data._embedded.talents;
  for (let i = 0; i < responseTalents.length; i++) {
    talents.push({
      id: i,
      firstname: responseTalents[i].firstName,
      lastname: responseTalents[i].lastName,
      languages: responseTalents[i].languagesSpoken,
      voiceTypes: responseTalents[i].voiceTypes,
      country: responseTalents[i].country,
      intonations: responseTalents[i].intonations,
      voice_sample_url: "assets/img/mus.mp3",
      voice_sample_name:
          "Cehennem Beat - Asıl Mesele (ÇUKUR VARTOLU RAMİZ DAYI)",
      user_img: "assets/img/theme/team-4-800x800.jpg",
    });
  }
  return talents;
};

export class Provider extends Component {
  state = {
    talents: [],
    dispatch: async (action) => {
      const newState = await reducer(this.state, action);
      this.setState(newState);
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
