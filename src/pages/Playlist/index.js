import Header from '../../Components/Header';
import styles from './Playlist.module.css';
import React, { useState } from 'react';

function Playlist() {
  const [file, setFile] = useState(null);

  // Função que será executada quando o arquivo for selecionado
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      console.log(`Arquivo selecionado: ${selectedFile.name}`);
    }
  };

  // Estado que armazena as opções da playlist
  const [playlists, setPlaylists] = useState([
    { value: 'option1', label: 'Playlist: Tommasi Laboratório' },
    { value: 'option2', label: 'Playlist: Labortel Laboratório Jardim Tropical' },
    { value: 'option3', label: 'Playlist: Laboratório Nossa Rede Serra' },
    { value: 'option4', label: 'Playlist: Laboratório Pretti Laranjeiras' }
  ]);

  // Função que adiciona uma nova opção à playlist
  const handleAddPlaylist = () => {
    const newPlaylist = { 
      value: `option${playlists.length + 1}`, 
      label: `Nova Playlist ${playlists.length + 1}` 
    };
    setPlaylists([...playlists, newPlaylist]);
  };

  return (
    <div className={styles.container}>
      <Header/>
      <img src="./images/Logo.png" alt="Logo" className={styles.Logo} />

      <div className={styles.Seletora}>
        {/* Botão de adicionar */}
        <a href="#adicionar" className={styles.Adicionar} onClick={handleAddPlaylist}>
          <img src="./images/Adicionar.png" alt="Adicionar" />
        </a>

        {/* Dropdown (select) que exibe as playlists */}
        <select className={styles.selecaoPlaylist}>
          <option value="" disabled selected>Selecione uma opção</option>
          {/* Renderiza as opções dinamicamente */}
          {playlists.map((playlist, index) => (
            <option key={index} value={playlist.value}>
              {playlist.label}
            </option>
          ))}
        </select>
      </div>

      <div>
        <div className={styles.Referencias}>
          <p>DISPOSITIVO DE VISUALIZAÇÃO</p>
          <p>MENSAGEM DE RODAPÉ</p>
        </div>

        <div className={styles.SelecaoReferencias}>
          <select className={styles.selecaoDispositivo}>
            <option value="" disabled selected>Selecione uma opção</option>
            <option value="option1">Tv Saguão Princial 1</option>
            <option value="option2">Tv Saguão Princial 2</option>
            <option value="option3">Tv consultorio 1</option>
            <option value="option4">Tv consultorio 2</option>
          </select>
          
          <input type="text" className={styles.MensagemRodape} placeholder="Mensagem de Rodapé" />
        </div>
      </div>

      <div className={styles.Timeline}>
        <p>Timeline:</p>
      </div>
      
      <div className={styles.uploadSection}>
        {/* Input invisível */}
        <input
          type="file"
          id="fileUpload"
          style={{ display: 'none' }}
          onChange={handleFileChange}
        />
        <label htmlFor="fileUpload">
          <img
            src="./images/SalvarImagens.png"
            alt="Upload"
            style={{ width: '150px', cursor: 'pointer' }}
          />
        </label>

        {file && <p>Arquivo selecionado: {file.name}</p>}
      </div>
    </div>
  );
}

export default Playlist;
