import _ from 'lodash';
import './css/dragtest.css';
import './css/index.css';
import './css/input.css';
import './css/menu.css';
import './css/workspace.css';
import { DragNDrop } from './draganddrop/dragndrop';

const horizontalDragList = new DragNDrop(document.getElementById('drag-list-1'));
const verticalDragList = new DragNDrop(document.getElementById('drag-list-2'));
