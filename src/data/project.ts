const projects = [
  {
    // image: "",
    title: "fdf",
    // link: "",
    tags: ["C", "tag2", "tag3"],
    description: "description",
  },
  {
    // image: "",
    title: "minishell",
    // link: "",
    tags: ["C", "tag2", "tag3"],
    description: "description",
  },
  {
    // image: "",
    title: "miniRT",
    // link: "",
    tags: ["C", "RayTracing", "Math"],
    description: "description",
  },
  {
    // image: "",
    title: "Inception",
    // link: "",
    tags: ["Docker", "docker-compose", "VM", "Nginx", "WordPress", "MariaDB"],
    description: `가상머신 위에 docker를 설치하고 Nginx, WordPress, MariaDB 컨테이너를 올렸습니다.
    각 컨테이너는 Alpine Linux 이미지에서 직접 패키지를 설치하는 Dockerfile을 만들어 설정해두었습니다.
    docker-compose를 통해 모든 컨테이너를 빌드, 실행시키고 네트워크와 볼륨도 설정했습니다.`,
  },
  {
    // image: "",
    title: "Webserv",
    // link: "",
    tags: ["C++", "Web Server", "IO Muliplexing", "Socket"],
    description: "description",
  },
  {
    // image: ccpp,
    image: "",
    title: "칙칙퐁퐁",
    link: "http://ccpp.games",
    tags: [
      "typescript",
      "React",
      "NestJS",
      "PostgreSQL",
      "Nginx",
      "Docker",
      "docker-compose",
      "Socket.IO",
      "Game",
    ],
    description: "description",
  },
];

export default projects;
