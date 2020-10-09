<?php

namespace Drupal\bglobal_pardot\Plugin\Block;

use Drupal\Core\Access\AccessResult;
use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Session\AccountInterface;

/**
 * Build a Pardot form within a Drupal block.
 *
 * @Block(
 *   id = "bglobal_pardot_block",
 *   admin_label = @Translation("Custom Pardot form")
 * )
 */
class PardotFormBlock extends BlockBase {

  /**
   * Overrides \Drupal\block\BlockPluginTrait::access().
   */
  public function access(AccountInterface $account, $return_as_object = FALSE) {
    $access = AccessResult::allowedIfHasPermission($account, 'access content');
    return $return_as_object ? $access : $access->isAllowed();
  }

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {
    $form['urls'] = [
      '#type' => 'details',
      '#title' => $this->t('Form URLs'),
      '#open' => FALSE,
    ];
    $form['urls']['action_url'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Form Action URL'),
      '#default_value' => $this->configuration['action_url'],
      '#description' => $this->t('The Pardot form URL'),
    ];
    $form['fields'] = [
      '#type' => 'details',
      '#title' => $this->t('Pardot Fields'),
      '#open' => TRUE,
    ];
    $form['fields']['field_list'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Included fields'),
      '#default_value' => $this->configuration['field_list'],
      '#options' => $this->getFieldOptions(),
    ];
    $form['fields']['tracking_fields'] = [
      '#type' => 'checkboxes',
      '#title' => $this->t('Hidden tracking fields'),
      '#default_value' => $this->configuration['tracking_fields'],
      '#options' => $this->getTrackingOptions(),
    ];
    $form['interface'] = [
      '#type' => 'details',
      '#title' => $this->t('Interface options'),
      '#open' => TRUE,
    ];
    $form['interface']['submit_label'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Submit button label'),
      '#default_value' => $this->configuration['submit_label'],
      '#description' => $this->t('The label for the submit button.'),
    ];
    $form['interface']['success_message'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Success message'),
      '#default_value' => $this->configuration['success_message'],
      '#description' => $this->t('Message to display after form submission.'),
    ];
    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    $this->configuration['action_url'] = $form_state->getValue(['urls', 'action_url']);
    $this->configuration['field_list'] = $form_state->getValue(['fields', 'field_list']);
    $this->configuration['tracking_fields'] = $form_state->getValue(['fields', 'tracking_fields']);
    $this->configuration['submit_label'] = $form_state->getValue(['interface', 'submit_label']);
    $this->configuration['success_message'] = $form_state->getValue(['interface', 'success_message']);
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'action_url' => 'https://go.pardot.com/l/102272/2016-11-04/2klckm',
      'field_list' => [
        'firstname' => 'firstname',
        'lastname' => 'lastname',
        'email' => 'email',
        'question' => 'question',
      ],
      'submit_label' => $this->t('Submit'),
      'success_message' => $this->t('Success message...'),
      'tracking_fields' => [
        'full_path' => 'full_path',
        'page_title' => 'page_title',
        'success_location' => 'success_location',
        'error_location' => 'error_location',
      ],
    ];
  }

  /**
   * Returns the list of available fields.
   */
  public function getFieldOptions() {
    return [
      'firstname' => 'firstname',
      'lastname' => 'lastname',
      'email' => 'email',
      'question' => 'question',
      'opt_in_contact' => 'opt_in_contact',
    ];
  }

  /**
   * Returns the list of available trackers.
   */
  public function getTrackingOptions() {
    return [
      'full_path' => 'full_path',
      'page_title' => 'page_title',
      'success_location' => 'success_location',
      'error_location' => 'error_location',
    ];
  }

  public function defaultFieldSettings() {
    $field_settings = [
      'firstname' => [
        'label' => 'First Name',
        'type' => 'text',
        'required' => TRUE,
      ],
      'lastname' => [
        'label' => 'Last Name',
        'type' => 'text',
        'required' => TRUE,
      ],
      'email' => [
        'label' => 'Email',
        'type' => 'text',
        'required' => TRUE,
      ],
      'question' => [
        'label' => 'Question',
        'type' => 'textarea',
        'rows' => '5',
        'cols' => '20',
        'required' => FALSE,
      ],
      'opt_in_contact' => [
        'label' => 'Contact List',
        'type' => 'checkbox',
        'description' => 'Join our mailing list.',
        'required' => FALSE,
      ],
    ];
    return $field_settings;
  }

  /**
   * Build the output.
   */
  public function build() {
    $build = [
      '#theme' => 'bglobal_pardot_form',
      '#action_url' => $this->configuration['action_url'],
      '#success_message' => $this->configuration['success_message'],
      '#submit_label' => $this->configuration['submit_label'],
    ];
    $fields = $this->configuration['field_list'];
    $field_settings = $this->defaultFieldSettings();
    foreach ($field_settings as $key => $value) {
      if (!empty($fields[$key])) {
        $build['#fields'][$key] = $value;
      }
    }
    $tracking = $this->configuration['tracking_fields'];
    foreach ($tracking as $key => $value) {
      if (!empty($value)) {
        $build['#tracking'][] = $key;
      }
    }
    $build['#attached']['library'][] = 'bglobal_pardot/drupal.bglobal_pardot';

    return $build;
  }

  /**
   * {@inheritdoc}
   */
  public function getCacheContexts() {
    // By default, all form blocks are per-url.
    return ['url'];
  }

}
