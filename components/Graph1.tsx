import { cx } from "@/lib/utils";
import { Prose } from "./Prose";
import { Mermaid } from "mdx-mermaid/lib/Mermaid";

interface Graph1Props {
  emoji?: string;
}

export const Graph1: React.FC<Graph1Props> = ({ emoji, children }) => {
  return (
    <div>
      <Mermaid
        chart={`%%{init: {'theme':'dark'}}%%
          mindmap
          root((Foundations))
              Learn a Programming Language
                Python
                C++
              Robotics Software Frameworks
                ROS
                YARP
                MOOS
              OS Concepts for Robotics
                RTOS
                IPC
              Networking & Connectivity
                Wireless Protocols
                ROS Networking
  `}
      />
      <div className="my-8"></div>
      <Mermaid
        chart={`%%{init: {'theme':'dark'}}%%
          mindmap
          root((Core<br>Concepts))
            Hardware Integration
              Microcontrollers
              Sensors
              Actuators
            Robot Kinematics & Dynamics
              Forward Inverse Kinematics
              Dynamics
              Control
            Data Structures & Algorithms
              Graph based Algorithms
              Search
              Optimization
  `}
      />
      <div className="my-8"></div>
      <Mermaid
        chart={`%%{init: {'theme':'dark'}}%%
          mindmap
          root((Advanced<br>Skills))
            Computer Vision & Perception
              OpenCV
              Image Processing
              Object Recognition
            Machine Learning & AI for Robotics
              TensorFlow
              PyTorch
              Reinforcement Learning
              SLAM
  `}
      />
      <div className="my-8"></div>
      <Mermaid
        chart={`%%{init: {'theme':'dark'}}%%
          mindmap
          root((Practical<br>Skills))
            Simulation & Testing
              Gazebo
              V REP
              Webots
              Virtual Testing
            Human Robot Interaction
              NLP
              Gesture Recognition
              Voice Commands
            Cybersecurity in Robotics
              Security Risks
              Secure Communication
              Data Protection
  `}
      />
      <div className="my-8"></div>
      <Mermaid
        chart={`%%{init: {'theme':'dark'}}%%
          mindmap
          root((Continuous<br>Improvement))
            Building
              Hands on Experience
              Open source Projects
              Competitions
            Learning
              Latest Research
              Conferences
              Workshops
              Forums
  `}
      />
    </div>
  );
};
