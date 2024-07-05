interface AvatarCardProps {
  title: string;
}

const AvatarCard = ({ title }: AvatarCardProps) => {
  const avatarLogo = title.slice(0, 1);
  const avatars = [
    "#0052ff",
    "#ffe804",
    "#784ffe",
    "#181c1f",
    "#4bca7e",
    "#7f017f",
    "#fea500",
    "#fc5200",
    "#ffefe7",
    "#ff3b30",
    "#fdf5d3",
  ];
  const index = Math.floor(Math.random() * 10);
  const cardStyle: {} = {
    "background-color": avatars[index],
  };
  return (
    <>
      <div className="task-avatar">
        <span
          className="img d-flex text-white fw-bold align-items-center fs-6 justify-content-center"
          style={cardStyle}
        >
          {avatarLogo}
        </span>
      </div>
    </>
  );
};

export default AvatarCard;
