import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerCardComponent } from '../components/server-card/server-card.component';

interface InfoItem {
  label: string;
  value: string | boolean;
  isCheckmark?: boolean;
}

@Component({
  selector: 'app-main-content',
  standalone: true,
  imports: [CommonModule, ServerCardComponent],
  templateUrl: './main-content.component.html',
  styleUrls: ['./main-content.component.scss']
})
export class MainContentComponent {
  descriptionText = `Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.`;

  extraText = `Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.`;

  infoItems: InfoItem[] = [
    { label: 'Lorem Ipsum Dolor', value: '10/19/2017' },
    { label: 'Lorem Ipsum Dolor', value: 'Ut' },
    { label: 'Lorem Ipsum Dolor', value: 'Eros' },
    { label: 'Lorem Ipsum Dolor', value: true, isCheckmark: true },
    { label: 'Lorem Ipsum Dolor', value: 'Sit' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor', value: 'Lorem Ipsum Dolor' },
    { label: 'Lorem Ipsum Dolor Sit', value: '' }
  ];
}
