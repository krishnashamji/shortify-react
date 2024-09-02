import "../App.css";

const LinkCard = ({ link, shortLink }) => {
  return (
    <div className="link-list-container">
      <div className="column-one">
        <div className="link-url">{link}</div>
      </div>
      <div className="column-two">
        <div class="shortened-url">{shortLink}</div>
        <button>Copy</button>
      </div>
    </div>
  );
};

const LinkList = (linkData) => {
  console.log("vsddfvdfv", linkData.data);
  return (
    <>
      {linkData.data.map((item) => (
        <LinkCard link={item.redirectUrl} shortLink={item.shortId} />
      ))}
    </>
  );
};

export default LinkList;
