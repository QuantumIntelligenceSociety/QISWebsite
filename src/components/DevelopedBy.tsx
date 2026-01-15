const DevelopedBy = () => {
  return (
    <div className="mb-8 font-mono text-neutral-10 text-xs text-center flex flex-col gap-3">
      <div>
        <span>Contact us: </span>
        <a
          href="mailto:info@sqai.org"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          aria-label="Email"
        >
          info@sqai.org
        </a>
      </div>
      <span>
        Developed by{" "}
        <a
          href="https://github.com/QuantumIntelligenceSociety/QISWebsite"
          className="inline-block transition duration-300 hover:-translate-y-px outline-none hover:text-primary-10 focus-visible:text-primary-10"
          target="_blank"
          aria-label="Developer"
        >
          量子智慧學會 Quantum Intelligence Society (QIS)
        </a>
      </span>
    </div>
  );
};

export default DevelopedBy;
