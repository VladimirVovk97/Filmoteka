import teamTemplate from '../modal-team-list.hbs';
import team from '../team-list.json';
//import { renderModal } from '../js/modal';

const modalTheme = teamTemplate(team);

export function openTeamModal() {
  renderModal(modalTheme);
}


