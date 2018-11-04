const assignState = state => {
  const data = {
    username: state.username,
    company: state.company,
    website: state.website,
    skills: state.skills,
    isWorking: state.isWorking,
    location: state.location,
    githubHandle: state.githubHandle,
    experiences: {
      title: state.title,
      company: state.companyName,
      location: state.location,
      from: state.from,
      to: state.to
    },
    social: {
      youtube: state.youtube,
      facebook: state.facebook,
      linkedIn: state.linkedIn,
      insta: state.insta,
      twitter: state.twitter
    },
    bio: state.bio,
    education: state.education
  };
  return data;
};

const assignProfile = data => {
  const profile = {
    username: data.username,
    name: data.name,
    skills: data.skills,
    avatar: data.avatar,
    location: data.location,
    bio: data.bio,
    isWorking: data.isWorking,
    social: data.social
  };
  return profile;
};
export { assignState, assignProfile };
