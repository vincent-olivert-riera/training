FROM fedora:33

RUN dnf -y install npm
RUN npm install -g @vue/cli

CMD ["bash"]
