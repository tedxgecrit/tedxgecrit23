import SmallHeading from "./SmallHeading";

const Address = () => {
  return (
    <div className="flex flex-col items-center gap-2 text-center md:flex-1">
      <div className="flex flex-col gap-1">
        <SmallHeading>FIND US</SmallHeading>
        <iframe
          title="Reach TEDxGECRIT at RIT, Kottayam via Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3137.921222750371!2d76.6208601897725!3d9.57880093862586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062d96b2fe8ed9%3A0xbade243e087b408!2sRajiv%20Gandhi%20Institute%20Of%20Technology!5e0!3m2!1sen!2sin!4v1692508856353!5m2!1sen!2sin"
          className="w-[250px] md:w-[300px]"
          width="300"
          height="100"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          style={{ border: 0, borderRadius: "5px" }}
          allowFullScreen
        ></iframe>
        <p className="footer_text py-1">
          Rajiv Gandhi Institute of Technology,
          <br />
          Nedumkuzhi, Pampady, Kottayam,
          <br />
          Kerala, India - 686501
        </p>
      </div>
    </div>
  );
};

export default Address;
