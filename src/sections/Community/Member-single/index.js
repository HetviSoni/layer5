import React from "react";
import { Link } from "gatsby";
import { MemberSingleWrapper } from "./memberSingle.style";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { FaLinkedin } from "@react-icons/all-files/fa/FaLinkedin";
import { FaUserTie } from "@react-icons/all-files/fa/FaUserTie";
import { IoIosArrowDropleftCircle } from "@react-icons/all-files/io/IoIosArrowDropleftCircle";
import { Col, Container, Row } from "../../../reusecore/Layout";
import Image from "../../../components/image";
import MeshMateIcon from "../../../assets/images/meshmate/meshmate-icon.svg";
import mesheryLogo from "../../../assets/images/meshery/icon-only/meshery-logo-light.svg";
import mesheryOperatorLogo from "../../../assets/images/meshery-operator/meshery-operator-dark.svg";
import smpLogo from "../../../assets/images/service-mesh-performance/stacked/smp-dark-text.svg";
import landscapeLogo from "../../../assets/images/landscape/layer5_landscape_green.svg";
import patternsLogo from "../../../assets/images/service-mesh-patterns/service-mesh-pattern.svg";
import NighthawkLogo from "../../../assets/images/nighthawk/icon-only/SVG/nighthawk-logo.svg";
import imageHubLogo from "../../../assets/images/image-hub/layer5-image-hub.svg";
import communityLogo from "../../../assets/images/community/community-green.svg";
import uiuxrLogo from "../../../assets/images/uiuxr/uiuxr.svg";
import writerIcon from "../../../assets/images/writer-program/writer-program-badge.svg";
import docsLogo from "../../../assets/images/docs/docs.svg";
import mesheryCatalogLogo from "../../../assets/images/meshery/meshery-catalog.svg";
import dockerExtensionLogo from "../../../assets/images/docker-extension/docker-extension-meshery-logo.svg";
import meshMapLogo from "../../../assets/images/meshmap/icon-only/meshmap-icon.svg";
import Button from "../../../reusecore/Button";

const MemberSingle = ({ frontmatter }) => {
  const {
    name,
    position,
    github,
    twitter,
    image_path,
    layer5,
    meshmate,
    linkedin,
    location,
    badges,
    bio,
    executive_bio,
  } = frontmatter;
  return (
    <MemberSingleWrapper>
      <Container>
        <div>
          <Row>
            <div className="backBtn">
              <Link to="/community/members">
                <IoIosArrowDropleftCircle />
                <h4>Go Back</h4>
              </Link>
            </div>
          </Row>
          <Row>
            <Col xs={12} sm={12} lg={6}>
              <Image
                className="profile-image"
                {...image_path}
                imgStyle={{ objectFit: "contain" }}
                alt={name}
              />
            </Col>
            <Col xs={12} sm={12} lg={6}>
              <div className="header">
                <div className="name">{name}</div>
                {position && <div className="position">{position}</div>}
              </div>
              <div className="body">
                {location && (
                  <div className="text location">
                    <span className="bold">{location}</span>
                  </div>
                )}
                {badges && (
                  <div className="social-bg">
                    <ul className="profile-social-links">
                      {badges.includes("meshery") && (
                        <li>
                          <Link to="/cloud-native-management/meshery">
                            <img
                              className="profile-social-links"
                              src={mesheryLogo}
                              alt="Meshery logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("smp") && (
                        <li>
                          <Link to="/projects/service-mesh-performance">
                            <img
                              className="profile-social-links"
                              src={smpLogo}
                              alt="Service Mesh Peformance logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("image-hub") && (
                        <li>
                          <Link to="/projects/image-hub">
                            <img
                              className="profile-social-links"
                              src={imageHubLogo}
                              alt="Image Hublogo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("landscape") && (
                        <li>
                          <Link to="/service-mesh-landscape">
                            <img
                              className="profile-social-links"
                              src={landscapeLogo}
                              alt="Service Mesh Landscape logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("community") && (
                        <li>
                          <Link to="/community/community-managers">
                            <img
                              className="profile-social-links"
                              src={communityLogo}
                              alt="Community logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("docs") && (
                        <li>
                          <Link to="https://docs.meshery.io/">
                            <img
                              className="profile-social-links"
                              src={docsLogo}
                              alt="Docs logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("meshery-catalog") && (
                        <li>
                          <Link to="https://meshery.io/catalog">
                            <img
                              className="profile-social-links"
                              src={mesheryCatalogLogo}
                              alt="Meshery Catalog logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("meshmap") && (
                        <li>
                          <Link to="/meshmap" >
                            <img
                              className="profile-social-links"
                              src={meshMapLogo}
                              alt="MeshMap Logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("docker-extension") && (
                        <li>
                          <Link to="/docker-extension-meshery">
                            <img
                              className="profile-social-links"
                              src={dockerExtensionLogo}
                              alt="Docker Extension logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("nighthawk") && (
                        <li>
                          <Link to="/projects/nighthawk">
                            <img
                              className="profile-social-links"
                              src={NighthawkLogo}
                              alt="Nighthawk logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("meshery-operator") && (
                        <li>
                          <Link to="/cloud-native-management/meshery/meshery-operator">
                            <img
                              className="profile-social-links"
                              src={mesheryOperatorLogo}
                              alt="Meshery Operator logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("patterns") && (
                        <li>
                          <Link to="/learn/service-mesh-books/service-mesh-patterns">
                            <img
                              className="profile-social-links"
                              src={patternsLogo}
                              alt="Patterns Logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("ui-ux") && (
                        <li>
                          <Link to="../../handbook/designer" >
                            <img
                              className="profile-social-links"
                              src={uiuxrLogo}
                              alt="UI/UX'er Logo"
                            />
                          </Link>
                        </li>
                      )}
                      {badges.includes("writer") && (
                        <li>
                          <Link to="../../handbook/writing-program">
                            <img
                              className="profile-social-links"
                              src={writerIcon}
                              alt="Writer Program Logo"
                            />
                          </Link>
                        </li>
                      )}
                    </ul>
                  </div>
                )}
                {bio && <div className="text bio">{bio}</div>}
              </div>
              <div className="social-bg">
                <ul className="profile-social-links">
                  {executive_bio &&
                    <li>
                      <Link to="bio">
                        <FaUserTie className="bio" size={32} />
                      </Link>
                    </li>
                  }
                  {github && (
                    <li>
                      <a href={`https://github.com/${github}`}>
                        <FaGithub className="github" size={32} />
                      </a>
                    </li>
                  )}
                  {twitter && (
                    <li>
                      <a href={`https://twitter.com/${twitter}`}>
                        <FaTwitter className="twitter" size={32} />
                      </a>
                    </li>
                  )}
                  {linkedin && (
                    <li>
                      <a href={`https://Linkedin.com/in/${linkedin}`}>
                        <FaLinkedin className="linkedin" size={32} />
                      </a>
                    </li>
                  )}
                  {layer5 && (
                    <li>
                      <a href={`https://meshery.layer5.io/user/${layer5}`}>
                        <img src={mesheryLogo} alt="meshery-icon"></img>
                      </a>
                    </li>
                  )}
                  {meshmate && (
                    <li>
                      <Link to="/community/meshmates">
                        <img
                          src={MeshMateIcon}
                          className="meshmate-white"
                          alt="meshmate-icon"
                        />
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </Col>
          </Row>
          <Row Hcenter>
            <Col className="start-contributing" sm={12} lg={12}>
              <p> Would you Like a Member Profile?</p>
              <Button
                primary
                title="Start Contributing Today"
                url="/community"
              />
            </Col>
          </Row>
        </div>
      </Container>
    </MemberSingleWrapper>
  );
};

export default MemberSingle;
