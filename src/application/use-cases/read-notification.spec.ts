import { Notification } from "../entities/notification";
import { InMemoryNotificationsRepository } from "../../../test/repositories/in-memory-notifications-repository";
import { CancelNotificaiton } from "./cancel-notification";
import { Content } from "@application/entities/content";
import { NotificationNotFound } from "./errors/notification-not-found";
import { makeNotification } from "@test/factories/notificaton-factory";
import { ReadNotificaitons } from "./read-notifications";



describe('Read notification', () => {

  it('should be able to read a notification', async () => {
    const notificationsRepository = new InMemoryNotificationsRepository()
    const readlNotification = new ReadNotificaitons(notificationsRepository);

    const notification = makeNotification();

    await notificationsRepository.create(notification);

    await readlNotification.execute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].readAt).toEqual(
      expect.any(Date),
    );
  });
  
  it('should not be able to read a non existing notification', async () =>{
    const notificationsRepository = new InMemoryNotificationsRepository()
    const readlNotification = new ReadNotificaitons(notificationsRepository);
    

    expect(() => {
      return readlNotification.execute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });

});